import { useEffect, useState } from "react";

import { Link } from "react-router-dom"
import { fetchAllUser } from "../../services/userService";
import EditUser from "./EditUser";

function User() {
    const [listUsers, setListUsers] = useState([]);
    const [isShowModalEditUser, setIsShowModalEditUser] = useState(false);
    const [dataModalUserUpdate, setDataModalUserUpdate] = useState({})

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        let respone = await fetchAllUser();
        console.log("check respone: ", respone.data)
        if (respone && respone.data.EC === 0) {
            setListUsers(respone.data.DT)
        }
    }

    const handleCloseModal = () => {
        setIsShowModalEditUser(false)

    }

    const handleEditUser = (user) => {
        setIsShowModalEditUser(true);
        setDataModalUserUpdate(user)
    }

    return (
        <>
            <div className="container">
                <div className="users-container">
                    <div className="user-header">
                        <div className="title">
                            <h3>Table Users</h3>
                        </div>
                        <div className="action  my-3">
                            <button className="btn btn-success refresh" >
                                <i className="fa-solid fa-arrows-rotate"></i>
                                <span className="mx-1">Refresh</span>
                            </button>
                            <button className="btn btn-primary" >
                                <i className="fa-solid fa-plus"></i>
                                <span className="mx-1">Add new user</span>
                            </button>
                        </div>
                    </div>

                    <div className="user-cotent">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Fullname</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listUsers && listUsers.length > 0 ?
                                    <>
                                        {listUsers.map((item, index) => {
                                            return (
                                                <tr key={`row-${index}`}>
                                                    <td>{(index + 1)}</td>
                                                    <td>{item.username}</td>
                                                    <td>{item.fullname}</td>
                                                    <td>{item.roleId}</td>
                                                    <th>
                                                        <button className="btn btn-warning mx-3"
                                                            onClick={() => { handleEditUser(item) }}
                                                        >
                                                            <i className="fa-regular fa-pen-to-square"></i>
                                                        </button>
                                                        <button className="btn btn-danger"

                                                        >
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>
                                                    </th>
                                                </tr>
                                            )
                                        })}
                                    </>
                                    :
                                    <>
                                        <tr>
                                            <td>
                                                Not Found User
                                            </td>
                                        </tr>
                                    </>
                                }


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            <EditUser
                show={isShowModalEditUser}
                handleCloseModal={handleCloseModal}
                dataModalUserUpdate={dataModalUserUpdate}
                fetchUser={fetchUser}
            />
        </>
    )
}

export default User