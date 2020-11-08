import React, { Component } from 'react';
import Feature from './FeatureName';
import "./OrderForm.css";
import FeatureName from './FeatureName'
import FeatureItem from './FeatureItem'


function OrderForm(props) {
    console.log(props)
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeatureName fs2={props.fs} />
        </form>
    )
}

export default OrderForm;

