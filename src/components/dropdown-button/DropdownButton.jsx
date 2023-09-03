import React,{useState} from 'react'
import './DropdownButton.css'

const DropdownButton = (props) => {
    const {text, width, height} = props;
    const [buttonAction, setButtonAction] = useState('');
    const [isOpen, setIsOpen] = useState(false);

     function handleButtonClick(){
        setIsOpen(!isOpen);
    }
    const dropdownmenu = () => {
        if(isOpen){
            return(
                <div className="dropdownmenu active">
                    <li>menu item</li>
                    <li>menu item</li>
                    <li>menu item</li>
                    <li>menu item</li>
                </div>
            )
        }else{
            return(
                <div className="dropdownmenu">
                    <li>menu item</li>
                    <li>menu item</li>
                    <li>menu item</li>
                    <li>menu item</li>
                </div>
            )
        }
        
    }
  return (
    <div>
    <button className="dropdownbutton"
     style={{ width: width, height:height }}
      onClick={handleButtonClick}
      >
        {text}
        {dropdownmenu()}    
    </button>
    
    </div>
    
  )
}

export default DropdownButton