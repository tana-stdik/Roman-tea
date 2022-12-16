import React from "react";
import { IconButton } from "rsuite";
import { Admin, Menu, Reload, Resize, Search } from '@rsuite/icons';
// Import the default CSS
import "rsuite/dist/rsuite.min.css";
  
function Button() {
  
    const ButtonStyle = { margin: "0px 10px" };
    return (
  
        <div className="App" style={{ textAlign: "center" }}>
            <header style={{ display: "block", marginBottom: "20px" }}>
                <h3 style={{ color: "green" }}>GeeksforGeeks</h3>
                <h5>React Suite Button Icon</h5>
            </header>
  
            {/* Icon Buttons */}
            <IconButton icon={<Reload />} color="cyan" 
                appearance="primary" style={ButtonStyle} />
            <IconButton icon={<Menu />} color="red" 
                appearance="primary" style={ButtonStyle} />
            <IconButton icon={<Admin />} color="violet" 
                appearance="primary" style={ButtonStyle} />
            <IconButton icon={<Resize />} color="green" 
                appearance="primary" style={ButtonStyle} />
            <IconButton icon={<Search />} color="cyan" 
                appearance="primary" style={ButtonStyle} />
        </div>
    );
}
  
export default Button;