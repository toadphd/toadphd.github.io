import React, {useState} from "react";

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Howl} from "howler";




export default function Search() {


    const audioClips = [
        {sound: "https://www.dropbox.com/s/r3n07i8o1iykxwy/rawteenpussy.mp3?raw=1", label: "teen pussy"},
        {  sound: "https://www.dropbox.com/s/0vg0zbbd8f78mtj/bruhbruh.mp3?raw=1", label: "bruh bruh bruh"},
        {  sound: "https://www.dropbox.com/s/2a4brhd9wpxhf77/woogiewoo.mp3?raw=1", label: "woogie woogie"},
        {sound:"https://www.dropbox.com/s/ksdopmyl99eznrf/womanpenis.mp3?raw=1", label: "woman penis"},
        {sound:"https://www.dropbox.com/s/und8j9t14h5l1fk/bahrahrha.mp3?raw=1", label:"bahrharharhah"},
            {sound:"https://www.dropbox.com/s/4wjuwh9s6wacx6u/showmeurfuckingcock.mp3?raw=1", label:"show me your fucking cock"},
                    {sound:"https://www.dropbox.com/s/irl2726x00ks35a/hababakaka.mp3?raw=1", label:"babakahabakaka"}
    ]

    // considering the data object to search on name
    const [searchedData, setSearchedData] = useState([]);


    const handleSearch = event => {
        const data = audioClips.filter(
            user => user.label.indexOf(event.target.value) !== -1
        );
        setSearchedData(data);
    };
    const subTaskComponents = audioClips.map(user =>
        <Button className="buttonpad" variant="success" size="lg" key={user.label} onClick={() => soundPlay(user.sound)}>
            {user.label}
        </Button>
    )

    const soundPlay = (src) => {
        const sound = new Howl ({
            src,
            html5: true

        })
        sound.play();
    }
    const showSearchedData = () => {

        return searchedData.length == 0 ?  subTaskComponents : searchedData.map(user => (
            <Button className="buttonpad" variant="success" size="lg" key={user.label} onClick={() => soundPlay(user.sound)}>
                {user.label}
            </Button>


        ));
    };

    return (
        <>
            <Col xs={12}>
                <input type="text"  placeholder="Search" onChange={handleSearch} />
            </Col>
            <h2 className="hi">
            </h2>
            <Col md={12}>
                {showSearchedData()}
            </Col>
        </>



    );
}
