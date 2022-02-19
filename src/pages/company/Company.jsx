import React from 'react'
import "./Company.css"

const Company = () => {
    return (
        <div className="company">
            <div className="parallax_layer parallax_layerback"></div>
            <div className='parallax_layer parallax_layerbase'>
                <div className="company-contents">
                    <div className="company-text">
                        <h2>会社概要</h2>
                        <p>ARKLETはどのようなニーズにもお応えする対応能力と、業界に関する深い知識をもとに若年層向けのサービスを日々模索しております。</p>
                    </div>
                    <table className='company-table'>
                        <tr>
                            <th>会社名</th>
                            <td>合同会社ARKLET</td>
                        </tr>
                        <tr>
                            <th>創業</th>
                            <td>2021年</td>
                        </tr>
                        <tr>
                            <th>代表取締役</th>
                            <td>山下青夏</td>
                        </tr>
                        <tr>
                            <th>電話番号</th>
                            <td>090-4444-2059</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Company