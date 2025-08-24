function Header() {
  //uploadSheet = () => {}
  //downloadSheet = () => {}

    return (
      <div className='Header'>
          <h1 className="row"> Isole Fluttuanti - Scheda Personaggio</h1>
          
          <div className='row'>
            <button /*onClick={this.downloadSheet}*/ >Salva</button>
            <input type="file" id="myfile"/>
            <button /*onClick={this.uploadSheet}*/ >Carica</button>
          </div>
      </div>
    );
}

export default Header;