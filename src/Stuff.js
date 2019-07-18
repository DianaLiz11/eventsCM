import React, { Component } from "react";
import style from './style.css'

 class Stuff extends Component {

	render() {
		const {newSales,sales, users, visit,date, handleChange, handleFormSubmit} = this.context
		return(
			<form className="center-form" onSubmit={handleFormSubmit}>
			<label for="banner">
			  Banner
			  <input id="banner" name="newSales" type="text"  value={newSales} onChange={handleChange} />
			</label>
			<label for="titulo">
			  Titulo
			  <input id="titulo" name="sales" type="text"  value={sales} onChange={handleChange} />
			</label>
			<label for="descripcion">
			  Descripción
			  <input id="descripcion" name="users" type="text"  value={users} onChange={handleChange} />
			</label>
			<label for="agenda">
			  Agenda
				<input id="agenda" name="visit" type="text"  value={visit} onChange={handleChange} />
			</label>
			<label for="prerequisitos">
			  Pre requisitos
			  <input id="prerequisito"name="date" type="text"  value={date} onChange={handleChange} />
			</label>
			<p>
			  Ubicación	
			</p>
			<label>Latitud</label>
			<input type="number"></input>
			<label>Longitud</label>
			<input type="number"></input>
			<label for="fecha">
			  Fecha
			  <input id="fecha"name="date" type="date"  value={date} onChange={handleChange} />
			</label>
			<label for="hora">
			  Hora
			  <input id="hora"name="date" type="text"  value={date} onChange={handleChange} />
			</label>
			<label for="capacidad">
			  Capacidad
			  <input id="capacidad"name="date" type="text"  value={date} onChange={handleChange} />
			</label>
			<input  className="waves-effect waves-light btn" type="submit" value="Submit" />
		  </form>
		);
	}
}
 
export default Stuff;