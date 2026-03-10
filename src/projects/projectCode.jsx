{/*<div id="projectOrganizer">
                <div id="Projects"><b>Name</b></div>
                <div id="Date"><b>Date Modified</b></div>
                <div id="numCharacters"><b>Characters</b></div>
            </div>
            <div id="projectOrganizer">
                <div id="Projects">Project Name1</div>
                <div id="Date">1/15/26</div>
                <div id="numCharacters">8 Charactes</div>
            </div>
            <div id="projectOrganizer">
                <div id="Projects"><NavLink to="/characters" id="fileLink">Project Name2</NavLink></div>
                <div id="Date">1/26/26</div>
                <div id="numCharacters">1 Character</div>
</div>
 <div id="characterOrganizer">
        <div id="Characters"><NavLink to="/character_sheets" id="fileLink">John</NavLink></div>
        <div id="Date">1/26/26</div>
      </div>*/}


      const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.get('*', (_req, res) => {
  res.send({ msg: 'Simon service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});