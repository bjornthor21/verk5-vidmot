<div align="center">
  <h1>Verkefni 5 - Björn Þór Hrafnkelsson - Viðmótsforritun</h1>
</div>
<div align="center">
   <h3>Tækniskólinn - 2023 -  FORR3FV05EU-Hát</h3>
</div>



## OsciStudio Hugmynd
Ég var með Hugmynd um að teikna 3D hluti á sveiflusjá og getað stjórnað þeim með handahreyfingum (Mediapipe hand gestures t.d) en eftir að skoða þetta betur er ansi erfitt að hafa áhrif á teikninguna með handahreyfingum. Það er til Livecoding í oscistudio en það er mjög simplified c++ sem styður ekkert import og notar ekki stl (í raun bara til að teikna/hafa áhrif á vectora). Þannig að tengja t.d mediapipe við oscistudio reyndist erfitt. Eftir að hafa skoðað sjánna sem ég átti var hún ekki með 2 inngöngum sem er nauðsynlegt því ég þarf X og Y. Eftir þessar hindranir á fyrstu viku verkefnisins ákvað ég í samráði við kennarann að skipta um verkefni.

Hér má sjá [Video](https://youtu.be/JaiFbfYU-Lw) af tilraun með sveiflusjá. Sveiflusjáin þurfti að vera analog túbu sjá. með 2 inngöngum fyrir X og Y. Eftir þó nokkra leit fann ég mann sem gat lánað mér svoleiðis.

Forritið sem notað er í að breyta 3D teikningu í hljóðtíðni er [OsciStudio](https://oscilloscopemusic.com/software/oscistudio/)

Hér er [Video](https://www.youtube.com/watch?v=4gibcRfp4zA&t=510s) frá "Smarter Every Day" sem kynnir sér þetta og talar við höfundana af OsciStudio


## AR Fireball
Í [Verkefni 4](https://github.com/bjornthor21/verk4-vidmot/) tókst mér að nota báðar myndavélar í síma til að stjórna AR hlut með handahreyfingum. User cameran er notuð til að greina handahreyfingar og Environment Cameran er notuð til að birta AR umhverfi. Í Þessu verkefni held ég áfram með það og innleiði image tracking. Hugmyndin er að getað komið AR "Fireball" fyrir á spil og síðan kastað honum og stjórnað honum með handahreyfingum. 

Þetta er gert með [Mediapipe](https://developers.google.com/mediapipe/solutions/vision/gesture_recognizer) fyrir handgreiningu og [three.js](https://threejs.org/) fyrir AR Renderingu, Image Tracking og animation.

#### Image Tracking
Kóðinn fyrir Image Tracking í threejs fékk ég frá [Grae n](https://github.com/graemeniedermayer/ArExperiments) og hans verkefnum í AR.

Hér er kóðinn fyrir Image Tracking frá Grae n: [html](https://github.com/graemeniedermayer/ArExperiments/blob/main/html/webxrMarker.html) og [Javascript](https://github.com/graemeniedermayer/ArExperiments/blob/main/javascript/webxrMarker.js)

### ATH!!!: til að fá Image Tracking til að virka þarf að fara inná [chrome://flags/](chrome://flags/) í síma og leita af WebXR Incubations og enable-a það.Sjá [Video](https://youtu.be/9LwTDKWC9G0?si=YVLsu_JO_gTwyd21&t=77) frá Grae n 



