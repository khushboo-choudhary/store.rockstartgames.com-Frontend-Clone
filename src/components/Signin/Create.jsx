import axios from "axios";
import { useState } from "react";
import "./login.css";

const Create = (props) => {
  const [formData, setForm] = useState({});

  const onChangeForm = (e) => {
      e.preventDefault()
    const { id, value } = e.target;
    setForm({ ...formData, [id]: value });
    console.log(formData);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    function postData(url) {
      axios.post(url, formData).then(console.log("posted"));
    }
    postData("http://localhost:PORT/");
  };

  return (
    <>
      <div className=" h-full pb-16" id="bgimg">
        <div
          className="snap-x object-contain lg:ml-96 md:ml-52 rounded lg:w-1/3 justify-center item-center pt-12"
          id="fitC"
        >
          <div className="flex justify-center item-center">
            <img
              className="w-72 h-24 pb-8 snap-center"
              src="https://s.rsg.sc/auth/images/sc_logo_20180910.svg"
              alt=""
            />
          </div>
          <div className="justify-center item-center">
            <form
              onSubmit={formSubmit}
              className=" block bg-white py-4 px-3 rounded w-full"
              id="fitC"
            >
              <h1 className="p-2 text-[#161616] font-bold text-2xl">
                Create a new account
              </h1>
              <input
                id="email"
                type="text"
                placeholder="Email"
                onChange={onChangeForm}
                className="py-3 md:w-96 rounded px-2 m-2 border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400"
                required
              />
              <br />
              <input
                id="password"
                type="password"
                placeholder="Password"
                onChange={onChangeForm}
                className="py-3 md:w-96 rounded px-2 m-2 border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400"
                required
              />
              <br />
              <input
                id="nickName"
                type="text"
                placeholder="Nickname"
                onChange={onChangeForm}
                className="py-3 md:w-96 rounded px-2 m-2 border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400"
                required
              />
              <br />
              <select
                className="py-3 md:w-96 rounded px-2 m-2 border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400 outline-none"
                id="country"
                onChange={onChangeForm}
                value=""
                name="country"
              >
                <option value="AF">Afghanistan</option>
                <option value="IN">India</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia-Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling Islands)</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="HR">Croatia</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="TP">East Timor</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard and McDonald Islands</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Laos</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">Macedonia</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia</option>
                <option value="MD">Moldova</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Netherlands Antilles</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn Islands</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Réunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="GS">S. Georgia and S. Sandwich Isls.</option>
                <option value="VC">Saint Vincent and The Grenadines</option>
                <option value="EH">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SG">Singapore</option>
                <option value="SK">Slovak Republic</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="ZA">South Africa</option>
                <option value="KR">South Korea</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="KN">St Kitts-Nevis</option>
                <option value="LC">St Lucia</option>
                <option value="SH">St. Helena</option>
                <option value="PM">St. Pierre and Miquelon</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen Islands</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="TW">Taiwan</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania</option>
                <option value="TH">Thailand</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad &amp; Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks &amp; Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UY">Uruguay</option>
                <option value="UM">US Minor Outlying Islands</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VA">Vatican</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Vietnam</option>
                <option value="VG">Virgin Islands (British)</option>
                <option value="VI">Virgin Islands (US)</option>
                <option value="WF">Wallis and Futuna Islands</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
              </select>
              <div className='mt-1 flex justify-start item-center w-[230px] md:w-[300px] lg:w-[400px]'>
              <input type="checkbox" id="notification" onChange={onChangeForm} /> <p className="ml-1 w-[250px] md:w-[300px] lg:w-[400px]">I would like to receive the early word on all Rockstar Games announcements, official launches, contests, special events and more.</p>
              
              </div>
              <div className='flex justify-between item-center'>
              <button
                className="px-4 py-1 m-1 font-semibold hover:bg-[#F7931E] text-black bg-white rounded border border-black"
              >Back</button>
              <input
                type="submit"
                value="Next"
                className="px-4 py-1 m-1 font-semibold hover:bg-[#F7931E] text-black bg-[#f99e36] rounded"
              />
              </div>
            </form>
          </div>
        <p className="p-2 text-white text-[13px] mt-8">© 2022 ROCKSTAR GAMES | PRIVACY POLICY | TERMS OF SERVICE</p>
        </div>
      </div>
    </>
  );
};

export default Create;
