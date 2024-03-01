import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/additional";
import './style.scss'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Why Main Street - Home";

        const timer = setTimeout(() => {
            dispatch(setLoading(false));
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [])

    return <div>This is the Home Page.</div>
}

export default Home