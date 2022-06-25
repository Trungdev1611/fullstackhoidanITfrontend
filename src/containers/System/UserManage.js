
import { connect } from 'react-redux';
import { useEffect } from 'react'
import { getAllUser, deleteUserbyId } from './../../services/userService'
import { useState } from 'react';
function UserManage() {
    const [allUser, setAllUser] = useState([])
    useEffect(() => {
        getAllUser().then(users => setAllUser(users.data))
    }, [])

    console.log(allUser)

    async function handleDelete(id) {

        await deleteUserbyId(id)   //return axios.delete('url${id}
        let data = await getAllUser()
        console.log(data)
        setAllUser(data.data)

    }
    return (
        <>
            <h2 className="text-center">Manage User</h2>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Email</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Adress</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allUser.length > 0 ? allUser.map((ele, index) => {
                        return <tr key={index}>
                            <td>{index}</td>
                            <td>{ele.email}</td>
                            <td>{ele.firstName}</td>
                            <td>{ele.lastName}</td>
                            <td>{ele.address}</td>
                            <td>
                                <button >EditUser</button>
                                <button onClick={() => handleDelete(ele.id)}>DeleteUser</button>
                            </td>
                        </tr>
                    }) : null}
                </tbody>
            </table>
        </>

    );
}



const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
