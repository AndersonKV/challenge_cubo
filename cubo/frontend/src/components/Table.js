import React, {useState, useEffect} from 'react';
import CanvasJSReact from '../canvasjs.react';
import api from '../services/api';
  
export default function Table() {
     const [user, setUser] = useState([]);
     const [chart, setChart] = useState([]);

    useEffect(() => {
    async function loadVaga() {
        try {    
          //usuarios
          const form = await api.get('/users');
          setUser(form.data)

          //objetos removido do usuario exceto name, lastname e y (porcentagem)
          const graph = await api.get('/users');
          setChart(graph.data)

        } catch (err) {
        console.log(err)
      }

    }
    loadVaga()
  },[]);

    const CanvasJS = CanvasJSReact.CanvasJS;
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
      animationEnabled: true,
      data: [{
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: []
      }]
    }

   //deleta os objetos, sem isso Canvas não funciona
  	chart.filter(p => {
      delete p.__v
      delete p._id
      delete p.sobrenome
      options.data[0].dataPoints.push(p)
    })

 
	return (
		<div className="div-table-chart">
      <table>
        <tbody>
					<tr>
						<th></th>
			        <th>First Name</th>
			          <th>Last Name</th>
 			          <th>Participation</th>
 			        </tr>
				{user.map((usuario, num)=> (
          <tr key={num}>		        
            <th>{num}</th>
            <th>{usuario.name}</th>
            <th>{usuario.lastName}</th>
            <th>{usuario.y}</th>
		       </tr>
				))}
				</tbody>
			</table>

      <CanvasJSChart options = {options} className="canvas" />
 		</div>
	)
}