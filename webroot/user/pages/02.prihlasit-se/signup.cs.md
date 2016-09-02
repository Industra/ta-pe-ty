---
title: 'Příhlásit se'

form:
    name: contact
    id: 'form'
    fields:
        - name: name
          label: Jméno
          placeholder: Vložte své jméno
          classes: ' '
          autofocus: on
          autocomplete: on
          type: text
          validate:
            required: true

        - name: surname
          label: Příjmení
          placeholder: Vložte své příjmení
          classes: ' '
          autofocus: on
          autocomplete: on
          type: text
          validate:
            required: true

        - name: email
          label: E-mail
          outerclasses: 'margin'
          classes: ' '
          placeholder: Vložte svůj e-mail
          type: email
          validate:
            required: true

        - name: phonenum
          label: Telefoní číslo
          placeholder: Vložte svoje telefoní číslo
          autofocus: on
          autocomplete: on
          type: number
          validate:
            required: false

        - name: patternname
          label: Název tapety
          placeholder: Vložte název vašeho návrhu
          autofocus: on
          autocomplete: on
          type: text
          validate:
            required: true

        - name: category
          label: Kategorie
          placeholder: Vyberte kategorii
          autofocus: on
          autocomplete: on
          type: select
          options:
            klasik: 'KLASIK'
            koncept: 'KONCEPT'
            kids: 'KIDS'
          validate:
            required: true

        - name: description
          label: Popis (max. 500 znaků)
          placeholder: Popište vaší tapetu.
          autofocus: on
          autocomplete: on
          type: textarea
          validate:
            type: textarea
            max: 500
            required: true

        - name: file
          label: Soutěžní návrh (náhled v PDF)
          placeholder: Nahrajte návrh
          outerclasses: 'margin'
          type: file
          multiple: true
          avoid_overwriting: true
          accept: 
            - application/pdf
          validate:
            required: true

        - name: agree_to_terms
          type: checkbox
          label: "Souhlasím s podmínkami soutěže."
          id: agree
          validate:
              required: true

    buttons:
        - type: submit
          value: Přihlásit


    process:
        - email:
            from: "mail@ta-pe-ty.cz"
            to: "tapetyopencall@gmail.com"
            subject: "{{ form.value.name|e }} {{ form.value.surname|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - email:
            from: "mail@ta-pe-ty.cz"
            to: "{{ form.value.email }}"
            subject: "TA-PE-TY Děkují!"
            body: "{% include 'forms/email-reply.html.twig' %}"
        - save:
            fileprefix: "{{ form.value.file|e }}"
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/dada.txt.twig' %}"
        - display: /dekujeme
---
