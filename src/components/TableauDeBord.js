// Le tableau de bord est la structure où l'utilisateur visualise et synchronise ses constantes
import React, { Component } from 'react';
import Const from './InfoConstante';
import Patient from '../model/patient';
import axios from 'axios';
import Activity from '../model/activity';

const axios_instance = axios.create({
    baseURL: 'https://api.fitbit.com/1/user/'+Activity.id+'-'+Patient.id+'/activities/heart',
    timeout: 1000
});

export default class TableauDeBord extends Component {

    state = {
        titre: <h1>{Patient.fullname()}</h1>,
        Infos: [
            /**{ name: "Activité", value: {Activity.fromJSON(baseURL)} },
            { name: "Fréquence cardiaque", value: {Patient.fromJSON(baseURL)} },
            { name: "Pression artérielle", value: {Patient.fromJSON(baseURL} },
            { name: "Oxygène", value: {Patient.fromJSON(baseURL} },
            { name: "Glycémie", value: {Patient.fromJSON(baseURL} }
        **/]
    }

    getConst = async () => {
        let result;
        
        let { id } = this.props.match.params;//get people id from url param (React Dom Router)

        try {
            //get data from API
            result = await axios_instance.get('/people/' + id);
            if (result.data) {
                this.setState({ people: Patient.fromJSON(result.data) });
            }
        } catch (error) {
            console.error(error);
        }
    }


    render() {
        return (
            // Balise contenant tous les éléments d'infos sur les constantes
            <div >
                <h1>{this.state.titre}</h1>
                <button onClick={this.getConst} >Synchroniser les données</button>
                {
                    this.state.Infos.map((info, index) => {
                        return (
                            <div key={index}>
                                <Const name={info.name} value={info.value} />
                            </div>
                        )
                    })
                }
                <button onClick={this.getConst}>Synchroniser les données</button>
            </div>
        )
    }
}
