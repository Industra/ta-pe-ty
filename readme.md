## HELP NEEDED
Repo pro někoho aby fixnul depresivní bug/mojí neschopnost. Plugin FORM (webroot/user/plugins/form) je generator na formuláře. Forma je automaticky generovaná z markdown v (/webroot/user/pages/02.prihlasit-se/singup.cs.md). 

Problém je, že příjmá mime type PDF. Mime typy jsou definovány v (/webroot/system/config/media.yaml). Když se nelimituje PDF a upload se nechá otevřený tak vše funguje.

týkají se toho tyto tři issues:

https://github.com/getgrav/grav-plugin-form/issues/88
https://github.com/getgrav/grav-plugin-form/issues/89
https://github.com/getgrav/grav-plugin-form/issues/81 

Nicméně tam se nic moc nepohlo.

Je tam potřeba ještě jedna feature a to třídit každý upload do vlastní složky.


Další řešení je napsat to přímo v php. Ten web je parakticky statický, nemusíme mít grav, takže klidně lze předělat homepage mimo grav.

