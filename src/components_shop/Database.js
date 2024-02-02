import React, { useState, useEffect } from "react";

function Database() {
	const [locations, setLocations] = useState([]);
	const [newLocation, setNewLocation] = useState({
		name: "",
		city: "",
		state: "",
		availableUnits: 0,
		wifi: false,
		laundry: false
	});
	const [editingLocation, setEditingLocation] = useState(null);
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	useEffect(() => {
		fetch("http://localhost:3001/locations")
			.then((response) => response.json())
			.then((data) => {
				setLocations(data);
			});
	}, []);

	const handleAddLocation = () => {
		fetch("http://localhost:3001/locations", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newLocation)
		})
			.then((response) => response.json())
			.then((data) => {
				// setLocations([...locations, data]);
				setLocations(locations => [...locations, data]);
				setNewLocation({
					name: "",
					city: "",
					state: "",
					availableUnits: 0,
					wifi: false,
					laundry: false
				});
			});
	};

	const handleDeleteLocation = (id) => {
		fetch(`http://localhost:3001/locations/${id}`, {
			method: "DELETE"
		})
			.then(() => {
				setLocations(locations.filter((location) => location.id !== id));
			});
	};

	const handleEditField = (field, value) => {
		setEditingLocation(prevState => ({
			...prevState,
			[field]: value
		}));
	};

	const handleUpdateLocation = (id) => {
		fetch(`http://localhost:3001/locations/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(editingLocation)
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Failed to update location');
				}
				return response.json();
			})
			.then(updatedLocation => {
				const updatedLocations = locations.map(location => {
					if (location.id === id) {
						return {
							...location,
							...updatedLocation
						};
					}
					return location;
				});
				setLocations(updatedLocations);
				setEditingLocation(null);
			})
			.catch(error => {
				console.error("Failed to update location:", error);
			});
	};


	return (
		<div style={{ maxWidth: "600px", margin: "0 auto" }}>
			<h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Add New Location</h2>
			<input
				type="text"
				value={newLocation.name}
				onChange={(e) => setNewLocation({ ...newLocation, name: e.target.value })}
				placeholder="Name"
				style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
			/>
			<input
				type="text"
				value={newLocation.city}
				onChange={(e) => setNewLocation({ ...newLocation, city: e.target.value })}
				placeholder="City"
				style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
			/>
			<input
				type="text"
				value={newLocation.state}
				onChange={(e) => setNewLocation({ ...newLocation, state: e.target.value })}
				placeholder="State"
				style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
			/>
			<input
				type="number"
				value={newLocation.availableUnits}
				onChange={(e) => setNewLocation({ ...newLocation, availableUnits: parseInt(e.target.value, 10) })}
				placeholder="Available Units"
				style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
			/>
			<label style={{ display: "block", marginBottom: "0.5rem" }}>
				Wifi:
				<input
					type="checkbox"
					checked={newLocation.wifi}
					onChange={(e) => setNewLocation({ ...newLocation, wifi: e.target.checked })}
				/>
			</label>
			<label style={{ display: "block", marginBottom: "0.5rem" }}>
				Laundry:
				<input
					type="checkbox"
					checked={newLocation.laundry}
					onChange={(e) => setNewLocation({ ...newLocation, laundry: e.target.checked })}
				/>
			</label>
			<button
				onClick={handleAddLocation}
				style={{
					padding: "0.5rem 1rem",
					backgroundColor: "#007bff",
					color: "#fff",
					border: "none",
					borderRadius: "4px",
					cursor: "pointer"
				}}
			>
				Add Location
			</button>
			<h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Locations</h2>
			<ul style={{ listStyleType: "none", padding: "0" }}>
				{locations.map((location) => (
					<li key={location.id} style={{ marginBottom: "1rem" }}>
						{editingLocation && editingLocation.id === location.id ? (
							<>
								<h3>
									<input
										type="text"
										value={editingLocation.name}
										onChange={(e) => handleEditField("name", e.target.value)}
										placeholder="Name"
										style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
									/>
								</h3>
								<p>
									City:{" "}
									<input
										type="text"
										value={editingLocation.city}
										onChange={(e) => handleEditField("city", e.target.value)}
										placeholder="City"
										style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
									/>
								</p>
								<p>
									State:{" "}
									<input
										type="text"
										value={editingLocation.state}
										onChange={(e) => handleEditField("state", e.target.value)}
										placeholder="State"
										style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
									/>
								</p>
								<p>
									Available Units:{" "}
									<input
										type="number"
										value={editingLocation.availableUnits}
										onChange={(e) => handleEditField("availableUnits", parseInt(e.target.value, 10))}
										placeholder="Available Units"
										style={{ width: "100%", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "4px" }}
									/>
								</p>
								<label style={{ display: "block", marginBottom: "0.5rem" }}>
									Wifi:
									<input
										type="checkbox"
										checked={editingLocation.wifi}
										onChange={(e) => handleEditField("wifi", e.target.checked)}
									/>
								</label>
								<label style={{ display: "block", marginBottom: "0.5rem" }}>
									Laundry:
									<input
										type="checkbox"
										checked={editingLocation.laundry}
										onChange={(e) => handleEditField("laundry", e.target.checked)}
									/>
								</label>
								<button
									onClick={() => handleUpdateLocation(editingLocation.id, editingLocation)}
									style={{
										padding: "0.5rem 1rem",
										backgroundColor: "#007bff",
										color: "#fff",
										border: "none",
										borderRadius: "4px",
										cursor: "pointer"
									}}
								>
									Save
								</button>

							</>
						) : (
							<>
								<h3>{location.name}</h3>
								<p>City: {location.city}</p>
								<p>State: {location.state}</p>
								<p>Available Units: {location.availableUnits}</p>
								<p>Wifi: {location.wifi ? "Yes" : "No"}</p>
								<p>Laundry: {location.laundry ? "Yes" : "No"}</p>
								<button
									onClick={() => handleDeleteLocation(location.id)}
									style={{
										padding: "0.5rem 1rem",
										backgroundColor: "#007bff",
										color: "#fff",
										border: "none",
										borderRadius: "4px",
										cursor: "pointer"
									}}
								>
									Delete
								</button>
								<button
									onClick={() => setEditingLocation(location)}
									style={{
										padding: "0.5rem 1rem",
										marginLeft: "1rem",
										backgroundColor: isHovered ? '#0056b3' : '#007bff',
										color: "#fff",
										border: "none",
										borderRadius: "4px",
										cursor: "pointer",
									}}
								>
									Edit
								</button>
							</>
						)}
					</li>
				))}
			</ul>
		</div>

	);
}

export default Database;