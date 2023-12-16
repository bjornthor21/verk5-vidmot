<div align="center">
  <h1>Verkefni 5 - Björn Þór Hrafnkelsson - Viðmótsforritun</h1>
</div>
<div align="center">
   <h3>Tækniskólinn - 2023 -  FORR3FV05EU-Hát</h3>
</div>



## OsciStudio Hugmynd
Ég var með Hugmynd um að teikna 3D hluti á sveiflusjá og getað stjórnað þeim með handahreyfingum (Mediapipe hand gestures t.d) en eftir að skoða þetta betur er ansi erfitt að hafa áhrif á teikninguna með handahreyfingum. Það er til Livecoding í oscistudio en það er mjög simplified c++ sem styður ekkert import og notar ekki stl (í raun bara til að teikna/hafa áhrif á vectora). Þannig að tengja t.d mediapipe við oscistudio reyndist erfitt. Eftir að hafa skoðað sjánna sem ég átti var hún ekki með 2 inngöngum sem er nauðsynlegt því ég þarf X og Y. Eftir þessar hindranir á fyrstu viku verkefnisins ákvað ég í samráði við kennarann að skipta um verkefni.

Hér má sjá [Video](https://youtu.be/JaiFbfYU-Lw) af tilraun minni með sveiflusjá. Sveiflusjáin þurfti að vera analog túbu sjá. með 2 inngöngum fyrir X og Y. Eftir þó nokkra leit fann ég mann sem gat lánað mér svoleiðis.

Útkoman var fín. Mjög töff það er einhver bjögun sem á sér stað á leiðinni frá tölvunni í sjánna. Ástæðan fyrir því getur verið vegna takmarkaðs hljóðkorts í fartölvunni. lélegar tengingar á milli. Það er algengt að setja einhvern hágæða Audio amp á milli sem gæti lagað bjögun. Mér fannst þetta ganga mjög vel miðað við setup.

Forritið sem notað er í að breyta 3D teikningu í hljóðtíðni er [OsciStudio](https://oscilloscopemusic.com/software/oscistudio/)

Hér er [Video](https://www.youtube.com/watch?v=4gibcRfp4zA&t=510s) frá "Smarter Every Day" sem kynnir sér þetta og talar við höfundana af OsciStudio


## AR Fireball
### [Github Pages Demo](https://bjornthor21.github.io/verk5-vidmot/)

Í [Verkefni 4](https://github.com/bjornthor21/verk4-vidmot/) tókst mér að nota báðar myndavélar í síma til að stjórna AR hlut með handahreyfingum. User cameran er notuð til að greina handahreyfingar og Environment Cameran er notuð til að birta AR umhverfi. Í Þessu verkefni held ég áfram með það og innleiði image tracking. Hugmyndin er að getað komið AR "Fireball" fyrir á spil og síðan kastað honum og stjórnað honum með handahreyfingum. Sjá [video](https://www.youtube.com/watch?v=hhCZZp5rj4Q)

Þetta er gert með [Mediapipe](https://developers.google.com/mediapipe/solutions/vision/gesture_recognizer) fyrir handgreiningu og [three.js](https://threejs.org/) fyrir AR Renderingu, Image Tracking og animation.

### ATH!!!: til að fá Image Tracking til að virka þarf að fara inná [chrome://flags/](chrome://flags/) í síma og leita af WebXR Incubations og enable-a það. Sjá [Video](https://youtu.be/9LwTDKWC9G0?si=YVLsu_JO_gTwyd21&t=77) frá Grae n 

#### Image Tracking
Kóðinn fyrir Image Tracking í threejs fékk ég frá [Grae n](https://github.com/graemeniedermayer/ArExperiments) og hans verkefnum í AR.

Hér er kóðinn fyrir Image Tracking frá Grae n: [html](https://github.com/graemeniedermayer/ArExperiments/blob/main/html/webxrMarker.html) og [Javascript](https://github.com/graemeniedermayer/ArExperiments/blob/main/javascript/webxrMarker.js)

hér má sjá hvernig myndir það er best að velja fyrir image tracking [Creating Good Markers](https://github.com/Carnaux/NFT-Marker-Creator/wiki/Creating-good-markers)

### Útkoma
Þetta heppnaðist ansi vel það er afsjálfsögðu hægt að betrumbæta margt. Aðal gallinn er hve hægt þetta keyrir það er eitthvað sem ég reyndi að laga en gekk aldrei. sennilega er þetta síminn sem á erfitt með þetta. kannski skiljanlegt :). Það væri hægt að leika sér endalaust við að bæta features á þetta. t.d Dýpt og láta boltan gefa frá sér ljós sem lýsir upp herbergið. Svo las ég um AR collision þar sem AR hlutur klessir á veggi og gólf í raunveruleikanum þetta er nú ekki ennþá komið.

#### Notkunar Leiðbeiningar
Stundum er þetta smá leiðinlegt en þegar komið er á vefsíðu og ýta á takkan ætti Ar umhverfi að birtast. Ekki er lengur þörf á að ýta 2 sinnum á takkan.
Eftir að búið er að koma upp AR umhverfinu og myndavélin byrjuð að sýna frá sér. beina myndavél að mynd (sjá mynd fyrir neðan). gera krepptan hnefa og þá birtist Fireball. Svo getur þú skotið með því að opna lófan. Þá skýst hluturinn af stað og á meðan hann er í loftinu þá geturu fært hendina til að stjórna boltanum.


![](https://github.com/bjornthor21/verk5-vidmot/blob/main/firecard.png)




