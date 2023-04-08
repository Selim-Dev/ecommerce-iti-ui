import React from 'react'
export async function getServerSideProps(context){
	// const {req,res} = context;
	// url > https://bluepages.com.sa/api/users/getUserProfile/me , token

	const data  = await fetch('https://bluepages.com.sa/api/users/getUserProfile/me',{
		headers:{
			'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMSwicm9sZSI6IkFETUlOIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20ifSwiaWF0IjoxNjgwODU5NDMzLCJleHAiOjE2ODM4ODM0MzN9.sZpasYb-R3nxdq0JKACaevdOL5Rwi1rVGeXoVrzJLkE'
		}
	})
	const user = await data.json();
	return {
		props: {
			user
		}
	}
}
const UserProfile = ({user}) => {
	return (
		<div className="container">
		<h1>User Profile</h1>
		<table className="user-table">
			<tbody>
				<tr>
					<td>ID:</td>
					<td>{user.id}</td>
				</tr>
				<tr>
					<td>Name:</td>
					<td>{user.name}</td>
				</tr>
				<tr>
					<td>Email:</td>
					<td>{user.email}</td>
				</tr>
				<tr>
					<td>Role:</td>
					<td>{user.role}</td>
				</tr>
				<tr>
					<td>Created At:</td>
					<td>{user.createdAt}</td>
				</tr>
				<tr>
					<td>Updated At:</td>
					<td>{user.updatedAt}</td>
				</tr>
				<tr>
					<td>Companies:</td>
					<td>
						{user.companies.map((company) => (
							<div style={{border:'2px solid black'}} key={company.id}>
								<p>Name: {company.name_en}</p>
								<p>Email: {company.email}</p>
								<p>Phone: {company.standard_phone}</p>
							</div>
						))}
					</td>
				</tr>
			</tbody>
		</table>
		<style >{`
			.container {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin-top: 50px;
			}

			.user-table {
				border-collapse: collapse;
				width: 50%;
			}

			.user-table td,
			.user-table th {
				border: 1px solid #ddd;
				padding: 8px;
			}

			.user-table th {
				text-align: left;
				background-color: #f2f2f2;
			}

			p {
				margin: 0;
			}
		`}</style>
	</div>
	)
}

export default UserProfile