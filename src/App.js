import React, {Component} from 'react';
import Card from './components/Card';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';
import cards from './cards.json';

class App extends Component {
    download(id) {
        const node = document.getElementById(id);
        domtoimage.toBlob(node).then((blob) => FileSaver.saveAs(blob, `${id}.png`))
    }

    render() {
        return (
            <div>
                {cards.map(
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
