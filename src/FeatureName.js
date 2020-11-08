import React, { Component } from 'react';
import "./FeatureName.css";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import FeatureItem from './FeatureItem'

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });


// class FeatureName extends Component {
//     render() {
//         console.log(this.props)
//         const features = Object.values(this.props.features).map((feature, index) => {
//             return (
//             <FeatureItem key={index} name={feature} />
//             )
//         })
//         console.log(features)
//         return (
//             <div>
//                 <p>{features}</p> 
//                 <FeatureName />
//             </div>
//         )
//     }
// }


class FeatureName extends Component {
    render() {
        console.log(this.props.fs2)
        const features = Object.keys(this.props.fs2).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.fs2[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <div key={itemHash} className="feature__item">
                        <input 
                            type="radio"
                            className="feature__option"
                            name={slugify(feature)}
                            //cost={[feature].cost}
                            //checked={item.name === this.state.selected[feature].name}
                            onChange={e => this.updateFeature(feature, item)}
                        />
                        <label htmlFor={itemHash} className="feature__label">
                            {item.name} ({USCurrencyFormat.format(item.cost)})
                        </label>
                    </div>
                )
            })
            console.log(options)
            // console.log(name)
        })
        console.log(features)
        return (
            <div>
                <p>Return this.</p>
                {/* <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {/* {options} */}
                {/* <FeatureItem /> */}
                {/* </fieldset> */}

            </div>

        )
        console.log(features)
    }
}

export default FeatureName;