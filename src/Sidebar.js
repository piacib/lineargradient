import './css/sidebar.css'
const Sidebar = () => {
    let keys = ['+','-','t','b','r', 'click'];
    let output = ['Add 3 to b value', 'Subtract 3 from b value', 'Fix top color', 'Fix bottom color','Reset fixed color to variable', 'Copy to clipboard']
    return (
        <div className = "sidenav">
            <div className ='vertCenter'>
               
                <table>
                <tr>
                    <th>Key</th>
                    <th>Action</th>
                </tr>
                    {keys.map((x,idx) => 
                    <tr>
                        <td>{x}</td>
                        <td>{output[idx]}</td>
                    </tr>)
                    }
                </table>
            </div>
        </div>
    )
}
export default Sidebar