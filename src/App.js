import React, {Component} from 'react';
import Card from './components/Card';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

const card = [
    {
        id: 'scientist-harvest-rover',
        role: 'scientist',
        title: 'Harvest Rover',
        level: 1,
        tech_line: 'harvest',
        description: 'Gain a matching resource per fleet on a <b>colonized</b> tile during harvest',
        flavor_text: 'You have created machines capable of harvesting additional resources',
        costs: [{resource_type: 'food', amount: 1}, {resource_type: 'matter', amount: 1}],
        prerequisites: [],
        tech_action: false,
        flip_tech: true
    },
    {
        id: 'scientist-asteroid-mining',
        role: 'scientist',
        title: 'Asteroid Mining',
        level: 1,
        tech_line: 'harvest',
        description: 'Gain a matching resource per fleet on an <b>uncolonized</b> tile during harvest',
        flavor_text: 'You are able to remotely extract resources from uninhabited planets',
        costs: [{resource_type: 'food', amount: 1}, {resource_type: 'matter', amount: 1}],
        prerequisites: [],
        tech_action: false,
        flip_tech: true
    },
    {
        id: 'scientist-expanded-cargohold',
        role: 'scientist',
        title: 'Expanded Cargohold',
        level: 2,
        tech_line: 'harvest',
        description: 'Harvesting using your fleets now gives you resources equal to the level of the fleet',
        flavor_text: 'Fleets are now equipped with extra storage space due to continued reduction of technology size requirements',
        costs: [{resource_type: 'food', amount: 2}, {resource_type: 'matter', amount: 2}],
        prerequisites: [{name:'Asteroid Mining', tech_line: 'harvest'}, {name:'Harvest Rover', tech_line: 'harvest'}],
        tech_action: false,
        flip_tech: false
    },
    {
        id: 'scientist-terraform',
        role: 'scientist',
        title: 'Terraform',
        level: 2,
        tech_line: 'terraform',
        description: 'Spend a resource to add a matching symbol or military symbol to your <b>colonized</b> tile',
        flavor_text: 'You can modify the atmosphere and surface of your planets to make them more habitable',
        costs: [{resource_type: 'food', amount: 1}, {resource_type: 'matter', amount: 1}, {resource_type: 'energy', amount: 1}, {resource_type: 'any', amount: 1}],
        prerequisites: [],
        tech_action: true,
        flip_tech: false
    },
    {
        id: 'scientist-antimatter',
        role: 'scientist',
        title: 'Antimatter',
        level: 3,
        tech_line: 'terraform',
        description: 'Choose an <b>uncolonized</b> tile adjacent to one of your colonies. Destroy and flip it over. Collect all matching <b>resources.</b>',
        flavor_text: 'You have developed a weapon strong enough to obliterate any planet within range',
        costs: [{resource_type: 'food', amount: 1}, {resource_type: 'matter', amount: 1}, {resource_type: 'energy', amount: 1}, {resource_type: 'any', amount: 3}],
        prerequisites: [{name:'Terraform', tech_line: 'terraform'}],
        tech_action: true,
        flip_tech: true
    },
    {
        id: 'scientist-accretion-device',
        role: 'scientist',
        title: 'Accretion Device',
        level: 3,
        tech_line: 'terraform',
        description: 'Spend a resource to add matching or military symbol to an adjacent <b>destroyed</b> tile',
        flavor_text: 'Your scientists have developed a device capable of creating an entire habitable planet in the dead of space',
        costs: [{resource_type: 'food', amount: 1}, {resource_type: 'matter', amount: 1}, {resource_type: 'energy', amount: 1}, {resource_type: 'any', amount: 3}],
        prerequisites: [{name:'Terraform', tech_line: 'terraform'}],
        tech_action: true,
        flip_tech: true
    }
];

class App extends Component {
    download(id) {
        const node = document.getElementById(id);
        domtoimage.toBlob(node).then((blob) => FileSaver.saveAs(blob, `${id}.png`))
    }

    render() {
        return (
            <div>
                {card.map(
                    (c) => (
                        <div>
                            <Card {...c}/>
                            <input type="button" value="Download Image" onClick={() => this.download(c.id)}/>
                        </div>
                    )
                )}
            </div>
        );
    }
}

export default App;
