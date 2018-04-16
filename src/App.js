import React, {Component} from 'react';
import Card from './components/Card';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

const card = [
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
