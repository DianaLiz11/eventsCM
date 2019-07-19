import React, { Component } from "react";

import style from './style.css';




 class Stuff extends Component {

	 render() {

		const {banner, title, description, schedule, prerequirements, latitude, longitude, date, time, capacity, handleChange, handleFormSubmit} = this.context
		return(

			<div className="container">
				<form className="col s12 m12" onSubmit={handleFormSubmit}>
					<h4>Registro de Eventos</h4>
					<div className="row">
						<div className="input-field col s12 m6">
							<label>Banner</label>
							<input id="banner" name="banner" type="text" className="validate" value={banner} onChange={handleChange} />
						</div>
						<div className="input-field col s12 m6">
							<label>Titulo</label>
							<input id="title" name="title" type="text" className="validate" value={title} onChange={handleChange}/>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12 m6">
							<label>Descripción</label>
							<input id="description" name="description" type="text" className="validate" value={description} onChange={handleChange} />
						</div>
						<div className="input-field col s12 m6">
							<label>Agenda</label>
							<input id="schedule" name="schedule" type="text" className="validate" value={schedule} onChange={handleChange} />
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12 m12">
							<label>Pre requisitos</label>
							<textarea id="prerequirements" name="prerequirements" type="text" className="materialize-textarea" value={prerequirements} onChange={handleChange}></textarea>
						</div>
					</div>
					<div className="row">
						<div className="col s12 m12">
							<h6>Ubicación:</h6>
						</div>
						<div className="input-field col s12 m6">
							<label>Latitud</label>
							<input id="latitude" name="latitude" type="number" className="validate" value={latitude} onChange={handleChange}/>
						</div>
						<div className="input-field col s12 m6">
							<label>Longitud</label>
							<input id="longitude" name="longitude" type="number" className="validate" value={longitude} onChange={handleChange}/>
						</div>
					</div>
					<div className="row">
						<div className="col s12 m6">
							<label>Fecha</label>
							<input name="date" type="date" value={date} onChange={handleChange}/>
						</div>
						<div className="col s12 m6">
							<label>Hora</label>
							<input name="time" type="time" value={time} onChange={handleChange} />
						</div>
					</div>
					<div className="row">
						<div className="input-field col s12 m6">
							<label>Capacidad (Máximo de asistentes)</label>
							<input id="capacity" name="capacity" className="validate" type="number"  value={capacity} onChange={handleChange} />
						</div>
					</div>
					<input  className="waves-effect waves-light btn" type="submit" value="Submit" />
				</form>
			</div>

		);
	}
}
 
export default Stuff;