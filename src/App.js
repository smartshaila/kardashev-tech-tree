import React, {Component} from 'react';
import UnpurchasedCard from './components/UnpurchasedCard/UnpurchasedCard';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';
import cards from './cards-2';

class App extends Component {
    download(id) {
        const node = document.getElementById(id);
        domtoimage.toBlob(node).then((blob) => FileSaver.saveAs(blob, `${id}.png`))
    }

    constructor(props) {
        super(props);
        this.state = {'cards': cards};
    }

    render() {
        return (
            <div>
                {this.state.cards.map(
                    (c) => (
                        <div>
                            <UnpurchasedCard {...c}/>
                            <input type="button" value="Download Image" onClick={() => this.download(c.id)}/>
                        </div>
                    )
                )}
            </div>
        );
    }
}

export default App;
