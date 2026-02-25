import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './character_sheets.css';
import { NavLink, useParams } from 'react-router-dom';
import { Characters } from '../characters/characters';
import { saveFullName, saveAge, saveGender, saveHeight, saveBirthday, saveSpecies, savePersonality, saveStrengths, saveWeaknesses, getRandomName, saveImage } from '../service.js';
import { Popup } from '../scripts.jsx';

export function Character_Sheets() {
    const { projectName, characterName } = useParams();
    const users = JSON.parse(localStorage.getItem('users'));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const user = users.find((u) => u.username === currentUser.username);
    const project = user.projects.find(p => p.name === projectName);
    const character = project.characters.find(c => c.name === characterName);

    const [fullName, setFullName] = React.useState(character.fullName);
    const [age, setAge] = React.useState(character.age);
    const [gender, setGender] = React.useState(character.gender);
    const [height, setHeight] = React.useState(character.height);
    const [birthday, setBirthday] = React.useState(character.birthday);
    const [species, setSpecies] = React.useState(character.species);
    const [image, setImage] = React.useState(character.imageURL);

    const [personality, setPersonality] = React.useState(character.personality);
    const [strengths, setStrengths] = React.useState(character.strengths);
    const [weaknesses, setWeaknesses] = React.useState(character.weaknesses);

    const [isPopupOpen, setPopupOpen] = React.useState(false);
    const [randomNameGender, setRandomNameGender] = React.useState('');    

    function convertImage(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {setImage(reader.result)
            saveImage(reader.result, projectName, characterName, currentUser);
        };
        
        reader.readAsDataURL(file);
    }

    function saveInfo(text, infoFunc) {
        infoFunc(text, projectName, characterName, currentUser);
    }

    function generateName() {
        getGender();
        setFullName(getRandomName(randomNameGender));
        setPopupOpen(false);
    }

    function getGender() {
        const options = document.getElementsByName('nameGender');

        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                setRandomNameGender(options[i].value);
            }
        }
    }

    return (
        <main>
            <div id="fileHeaders"><span><NavLink to='/projects' id='fileLink'>Projects</NavLink></span>- <span><NavLink to={`/projects/${projectName}`} id="fileLink">{projectName}</NavLink></span>- {characterName}</div>
            <div id="Organizer">
                <div id="mainOrganizer">
                    <div id="headInfo">
                        <div id="imageBox">
                            <img src={image} width="200px"></img>
                        </div>
                        <input type="file" accept=".image/*" onChange={convertImage}/>
                        <div id="nameBox">
                            <div id='nameTextBox'>{characterName}</div>
                        </div>
                    </div>
                    <div id="mainInfo">
                        <lable for="fullNameBox">Full Name: </lable>
                        <input type="text" id="fullNameBox" className='textStyle' value={fullName} placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} onBlur={() => saveInfo(fullName, saveFullName)} />
                        <p></p>
                        <lable for="ageBox">Age: </lable>
                        <input type="text" id="ageBox" className='textStyle' value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)} onBlur={() => saveInfo(age, saveAge)} />
                        <p></p>
                        <lable for="genderBox">Gender: </lable>
                        <input type="text" id="genderBox" className='textStyle' value={gender} placeholder="Gender" onChange={(e) => setGender(e.target.value)} onBlur={() => saveInfo(gender, saveGender)} />
                        <p></p>
                        <lable for="heightBox">Height: </lable>
                        <input type="text" id="heightBox" className='textStyle' value={height} placeholder="Height" onChange={(e) => setHeight(e.target.value)} onBlur={() => saveInfo(height, saveHeight)} />
                        <p></p>
                        <lable for="birthdayBox">Birthday: </lable>
                        <input type="text" id="birthdayBox" className='textStyle' value={birthday} placeholder="Birthday" onChange={(e) => setBirthday(e.target.value)} onBlur={() => saveInfo(birthday, saveBirthday)} />
                        <p></p>
                        <lable for="speciesBox">Species: </lable>
                        <input type="text" id="speciesBox" className='textStyle' value={species} placeholder="Species" onChange={(e) => setSpecies(e.target.value)} onBlur={() => saveInfo(species, saveSpecies)} />
                        <p></p>
                        <p></p>
                        <div>Need help with a name? <input type='button' value='Generate Random Name' onClick={() => setPopupOpen(true)} ></input></div>
                    </div>
                </div>

                <div id="additionalInfo">
                    <Accordion>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Personality</Accordion.Header>
                            <Accordion.Body>
                                <div className="accordion-body">
                                    <label for="personalityBox"></label>
                                    <textarea id="personalityBox" className="textAreaInfo" value={personality} onChange={(e) => setPersonality(e.target.value)} onBlur={saveInfo(personality, savePersonality)}></textarea>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Strengths</Accordion.Header>
                            <Accordion.Body>
                                <div className="accordion-body">
                                    <label for="strengthsBox"></label>
                                    <textarea id="strengthsBox" className="textAreaInfo" value={strengths} onChange={(e) => setStrengths(e.target.value)} onBlur={saveInfo(strengths, saveStrengths)}></textarea>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>Weaknesses</Accordion.Header>
                            <Accordion.Body>
                                <div className="accordion-body">
                                    <label for="weaknessesBox"></label>
                                    <textarea id="weaknessesBox" className="textAreaInfo" value={weaknesses} onChange={(e) => setWeaknesses(e.target.value)} onBlur={saveInfo(weaknesses, saveWeaknesses)}></textarea>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <p></p>

            <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
                <div id='fileHeaders'>Generate Random Name</div>
                <label><input type='radio' name='nameGender' value='male' checked={randomNameGender === 'male'} onChange={(e) => setRandomNameGender(e.target.value)}></input>Male</label>
                <div><label><input type='radio' name='nameGender' value='female' checked={randomNameGender === 'female'} onChange={(e) => setRandomNameGender(e.target.value)}></input>Female</label></div>
                <div><label><input type='radio' name='nameGender' value='any' checked={randomNameGender === 'any'} onChange={(e) => setRandomNameGender(e.target.value)}></input>Any</label></div>
                <p></p>
                <input type='button' value='Generate' onClick={generateName}></input>
            </Popup>
        </main>
    );
}