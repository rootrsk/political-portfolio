import React, { useEffect } from 'react'
import './panal.css'
function Panel() {
    useEffect(()=>{
        document.querySelectorAll('.acc_btn').forEach(button => {
            button.addEventListener('click', () => {
                const accordcnt = button.nextElementSibling;

                button.classList.toggle('acc_btn--active');

                if (button.classList.contains('acc_btn--active')) {
                    accordcnt.style.maxHeight = accordcnt.scrollHeight + 'px';
                } else {
                    accordcnt.style.maxHeight = 0;
                }
            })
        });
    },[])
    return (
    <div>
        <h3 className="header">Configuration Panel</h3>
        <div className="accordion">
            <button type="button" className="acc_btn">Plans</button>
            <div className="acc_cnt">
                <table>
                    <tr className="bgft">
                        <th>Current Plan</th>
                        <th>Payment Method</th>
                        <th>Location</th>
                        <th></th>
                    </tr>
                    <tr className="smft">
                        <td>Professional Plan</td>
                        <td>In cash</td>
                        <td>Location</td>
                        <td><button className="btn"> UPGRADE</button></td>
                    </tr>
                </table>
            </div>
        </div>

        <div className="accordion">
            <button type="button" className="acc_btn">Expiry date of plans</button>
            <div className="acc_cnt">
                <table>
                    <tr className="bgft">
                        <th>Subsription AI algorithm</th>
                        <th>Status</th>
                        <th>Start date</th>
                        <th> expiry date</th>
                    </tr>
                    <tr className="smft">
                        <td>People counting</td>
                        <td>active</td>
                        <td>jan 01,2021</td>
                        <td>Dec 30,2022</td>
                    </tr>
                </table>
            </div>
        </div>

        <div className="accordion">
            <button type="button" className="acc_btn">Geolocation</button>
            <div className="acc_cnt">
                <table>
                    <tr className="bgft">
                        <th>Current Plan</th>
                        <th>Payment Method</th>
                        <th>Location</th>
                        <th></th>
    
                    </tr>
                    <tr className="smft">
                        <td>Professional Plan</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td><button className="btn"> UPGRADE</button></td>
                    </tr>
                </table>
            </div>
        </div>

        <div className="accordion">
            <button type="button" className="acc_btn">Settings</button>
            <div className="acc_cnt">
                <table>
                    <tr className="bgft">
                        <th>Current Plan</th>
                        <th>Payment Method</th>
                        <th>Location</th>
                        <th></th>

                    </tr>
                    <tr className="smft">
                        <td>Professional Plan</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td><button className="btn"> UPGRADE </button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Panel
