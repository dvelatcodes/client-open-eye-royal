import React from "react";
import "./index.scss";


export default function SchoolStates({name, onChange, className}){
    return(
        <select name={name} onChange={onChange} className={className}>
                <option value="" className="schTypeOption">--Select State--</option>
                <option value="Abia" className="schTypeOption">Abia</option>
                <option value="Adamawa" className="schTypeOption">Adamawa</option>
                <option value="Akwa Ibom" className="schTypeOption">Akwa Ibom</option>
                <option value="Anambra" className="schTypeOption">Anambra</option>
                <option value="Bauchi" className="schTypeOption">Bauchi</option>
                <option value="Bayelsa" className="schTypeOption">Bayelsa</option>
                <option value="Benue" className="schTypeOption">Benue</option>
                <option value="Borno" className="schTypeOption">Borno</option>
                <option value="Cross River" className="schTypeOption">Cross River</option>
                <option value="Delta" className="schTypeOption">Delta</option>
                <option value="Ebonyi" className="schTypeOption">Ebonyi</option>
                <option value="Edo" className="schTypeOption">Edo</option>
                <option value="Ekiti" className="schTypeOption">Ekiti</option>
                <option value="Enugu" className="schTypeOption">Enugu</option>
                <option value="FCT" className="schTypeOption">Federal Capital Territory</option>
                <option value="Gombe" className="schTypeOption">Gombe</option>
                <option value="Imo" className="schTypeOption">Imo</option>
                <option value="Jigawa" className="schTypeOption">Jigawa</option>
                <option value="Kaduna" className="schTypeOption">Kaduna</option>
                <option value="Kano" className="schTypeOption">Kano</option>
                <option value="Katsina" className="schTypeOption">Katsina</option>
                <option value="Kebbi" className="schTypeOption">Kebbi</option>
                <option value="Kogi" className="schTypeOption">Kogi</option>
                <option value="Kwara" className="schTypeOption">Kwara</option>
                <option value="Lagos" className="schTypeOption">Lagos</option>
                <option value="Nasarawa" className="schTypeOption">Nasarawa</option>
                <option value="Niger" className="schTypeOption">Niger</option>
                <option value="Ogun" className="schTypeOption">Ogun</option>
                <option value="Ondo" className="schTypeOption">Ondo</option>
                <option value="Osun" className="schTypeOption">Osun</option>
                <option value="Oyo" className="schTypeOption">Oyo</option>
                <option value="Plateau" className="schTypeOption">Plateau</option>
                <option value="Rivers" className="schTypeOption">Rivers</option>
                <option value="Sokoto" className="schTypeOption">Sokoto</option>
                <option value="Taraba" className="schTypeOption">Taraba</option>
                <option value="Yobe" className="schTypeOption">Yobe</option>
                <option value="Zamfara" className="schTypeOption">Zamfara</option>
        </select>

    )
}
