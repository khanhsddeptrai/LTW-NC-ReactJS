import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import _ from "lodash";
import { updateCurrentUser } from "../../services/userService";


// import { fetchGroup, createNewUser, updateCurrentUser } from "../../services/userService";

const EditUser = (props) => {
    const [sex, setSex] = useState(["Male", "Female", "Other"]);
    const [role, setRole] = useState(["admin", "user"]);
    const { dataModalUserUpdate } = props

    const defaultUserData = {
        username: "",
        fullname: "",
        address: "",
        sex: "",
        roleId: ""
    }

    const [userData, setUserData] = useState(defaultUserData);

    useEffect(() => {
        setUserData(dataModalUserUpdate)
    }, [dataModalUserUpdate])

    const handleOnchangeInput = (value, name) => {
        let _userData = _.cloneDeep(userData);
        _userData[name] = value;
        setUserData(_userData);
    }

    const handleConfirmEditUser = async () => {
        await updateCurrentUser(userData);
        props.fetchUser();
        props.handleCloseModal();
    }

    return (
        <>
            <Modal size="lg" show={props.show} onHide={props.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span>Edit User</span>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="content-body row">
                        <div className="col-12 col-sm-6 form-group">
                            <label>Email (<span className="text-danger">*</span>):</label>
                            <input type="email" className="form-control" value={userData.email}
                                onChange={(event) => { handleOnchangeInput(event.target.value, "email") }}
                                disabled
                            />
                        </div>

                        <div className="col-12 col-sm-6 form-group">
                            <label>Username:</label>
                            <input type="text" className="form-control" value={userData.username}
                                onChange={(event) => { handleOnchangeInput(event.target.value, "username") }}
                            />
                        </div>

                        <div className="col-12 col-sm-6 form-group">
                            <label>Fullname:</label>
                            <input type="text" className="form-control" value={userData.fullname}
                                onChange={(event) => { handleOnchangeInput(event.target.value, "fullname") }}
                            />
                        </div>

                        <div className="col-12 col-sm-6 form-group">
                            <label>Address:</label>
                            <input type="text" className="form-control" value={userData.address}
                                onChange={(event) => { handleOnchangeInput(event.target.value, "address") }}
                            />
                        </div>

                        <div className="col-12 col-sm-6 form-group">
                            <label>Sex:</label>
                            <select
                                className="form-select"
                                onChange={(event) => { handleOnchangeInput(event.target.value, "sex") }}
                                value={userData.sex}
                            >
                                {sex.length > 0 &&
                                    sex.map((item, index) => {
                                        return (
                                            <option value={item} key={`sex-${index}`}>{item}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="col-12 col-sm-6 form-group">
                            <label>Role(<span className="text-danger">*</span>):</label>
                            <select
                                className="form-select"
                                onChange={(event) => { handleOnchangeInput(event.target.value, "roleId") }}
                                value={userData.roleId}
                            >
                                {role.length > 0 &&
                                    role.map((item, index) => {
                                        return (
                                            <option value={item.id} key={`role-${index}`}>{item}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleConfirmEditUser() }}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default EditUser;