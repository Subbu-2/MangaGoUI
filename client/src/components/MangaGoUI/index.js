import { React } from 'react';
import Page from '../Page/index';
import './index.css';

const MangoGoUI = () => {
    return (
        <div className="mainContainer">
        <h1 className="title">Welcome to MangaGoUI</h1>
        <div className="mangaContainer">
        <Page />
        </div>
        </div>
    )
};

export default MangoGoUI;