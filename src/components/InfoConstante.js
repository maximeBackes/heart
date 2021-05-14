// info constante est la structure qui contient une constante comme 'Activité' ou 'Pression artérielle'
import React, { Children, Component } from 'react';

const Const = (props, Children) => {

    // check l'existence de données à afficher, sinon valeur par défaut
    if (Children) {
        return (
            <div className="info_const">

            </div>
        )
    } else {
        return (
            <div className="info_const" style={{ backgroundColor: 'blueviolet', width: '400px', padding: '5px', margin: '5px auto' }}>
                <p>name</p>
            </div>
        )
    }
}

export default Const;