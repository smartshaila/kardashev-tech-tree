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
        prerequisites: [{name:'Terraform', tech_line: 'terraform'}, {name:'blank', tech_line:'none'}],
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
    },
    {
        id: 'scientist-proximity-fuse',
        role: 'scientist',
        title: 'Proximity Fuse',
        level: 1,
        tech_line: 'defense',
        description: 'If an enemy takes over your colony, they give you a resource',
        flavor_text: 'You’ve prepared a nasty surprise for anyone who dares attack you',
        costs: [{resource_type: 'food', amount: 1}, {resource_type: 'matter', amount: 1}],
        prerequisites: [],
        tech_action: false,
        flip_tech: true
    },
    {
        id: 'scientist-taxation',
        role: 'scientist',
        title: 'Taxation',
        level: 1,
        tech_line: 'resource',
        description: 'Gain a matching resource per colony harvested adjacent to your fleets',
        flavor_text: 'Your captains have discovered the efficiency of threatening your enemies, causing them to produce additional resources for your benefit',
        costs: [{resource_type: 'food', amount: 1}, {resource_type: 'energy', amount: 1}],
        prerequisites: [],
        tech_action: false,
        flip_tech: true
    },
    {
        id: 'scientist-defensive-turrets',
        role: 'scientist',
        title: 'Defensive Turrets',
        level: 2,
        tech_line: 'defense',
        description: 'If an enemy <b>fails</b> an attack against you, their <b>fleet</b> is downgraded by a level',
        flavor_text: 'You’ve developed planet-to-space weapons capable of targeting any fleet that tries to attack your colony',
        costs: [{resource_type: 'food', amount: 2}, {resource_type: 'matter', amount: 2}],
        prerequisites: [{name:'Taxation', tech_line: 'resource'}, {name:'Proximity Fuse', tech_line: 'defense'}],
        tech_action: false,
        flip_tech: true
    },
    {
        id: 'scientist-raider-drone',
        role: 'scientist',
        title: 'Raider Drone',
        level: 2,
        tech_line: 'attack',
        description: 'If you <b>fail</b> an attack, take <b>all</b> of one type of resource from your enemy',
        flavor_text: 'You have developed advanced drones capable of precise, targeted extraction',
        costs: [{resource_type: 'matter', amount: 2}, {resource_type: 'energy', amount: 2}],
        prerequisites: [{name:'Taxation', tech_line: 'resource'}, {name:'Proximity Fuse', tech_line: 'defense'}],
        tech_action: false,
        flip_tech: true
    },
    {
        id: 'scientist-disruptor-drone',
        role: 'scientist',
        title: 'Disruptor Drone',
        level: 3,
        tech_line: 'attack',
        description: 'If you <b>fail</b> an attack, your enemy downgrades their <b>colony</b> by a level',
        flavor_text: 'Your military team has developed a weapon that leaves great destruction in your wake',
        costs: [{resource_type: 'matter', amount: 3}, {resource_type: 'energy', amount: 3}],
        prerequisites: [{name:'Raider Drone', tech_line: 'attack'}, {name:'Defensive Turrets', tech_line: 'defense'}],
        tech_action: false,
        flip_tech: true
    },
    {
        id: 'scientist-timeshares',
        role: 'scientist',
        title: 'Timeshares',
        level: 3,
        tech_line: 'resource',
        description: 'Harvest from one adjacent <b>enemy</b> colony per fleet',
        flavor_text: 'Your military is so strong, your enemies will gladly work for you in exchange for a fleeting promise of safety',
        costs: [{resource_type: 'food', amount: 3}, {resource_type: 'energy', amount: 3}],
        prerequisites: [{name:'Raider Drone', tech_line: 'attack'}, {name:'Defensive Turrets', tech_line: 'defense'}],
        tech_action: false,
        flip_tech: true
    },
    {
        id: 'scientist-boosters',
        role: 'scientist',
        title: 'Boosters',
        level: 2,
        tech_line: 'military',
        description: 'Fleets move <b>twice</b> as far',
        flavor_text: 'Your shipbuilders have developed a technology capable of producing extreme speed',
        costs: [{resource_type: 'matter', amount: 2}, {resource_type: 'energy', amount: 2}],
        prerequisites: [{name:'Fuel Efficiency', tech_line: 'military'}],
        tech_action: false,
        flip_tech: false
    },
    {
        id: 'scientist-botsourcing',
        role: 'scientist',
        title: 'Botsourcing',
        level: 1,
        tech_line: 'scientist',
        description: 'Spend a resource to complete a <b>base</b> action as a <b>research</b> action',
        flavor_text: 'Lorem ipsum dolor sit amet, consectetur adipisci suspendisse commodo tellus in porta facilisis',
        costs: [{resource_type: 'matter', amount: 1}, {resource_type: 'energy', amount: 1}],
        prerequisites: [],
        tech_action: true,
        flip_tech: false
    },
    {
        id: 'scientist-cloning',
        role: 'scientist',
        title: 'Cloning',
        level: 2,
        tech_line: 'scientist',
        description: 'Choose any technology on your role card. This technology now mirrors that ability.',
        flavor_text: 'Lorem ipsum dolor sit amet, consectetur adipisci suspendisse commodo tellus in porta facilisis',
        costs: [{resource_type: 'matter', amount: 2}, {resource_type: 'energy', amount: 2}],
        prerequisites: [{name:'Botsourcing', tech_line: 'scientist'}],
        tech_action: false,
        flip_tech: false
    },
    {
        id: 'scientist-memory-eraser',
        role: 'scientist',
        title: 'Memory Eraser',
        level: 3,
        tech_line: 'scientist',
        description: 'Name a technology. All players who have researched it take resources equal to its cost and lose the technology.',
        flavor_text: 'Lorem ipsum dolor sit amet, consectetur adipisci suspendisse commodo tellus in porta facilisis',
        costs: [{resource_type: 'matter', amount: 3}, {resource_type: 'energy', amount: 3}],
        prerequisites: [{name:'Cloning', tech_line: 'scientist'}],
        tech_action: true,
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
