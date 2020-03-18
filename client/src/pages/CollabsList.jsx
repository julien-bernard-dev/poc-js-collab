import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateCollab extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/collabs/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteCollab extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the collab ${this.props.id} permanently?`,
            )
        ) {
            api.deleteCollabById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class CollabsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collabs: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllCollabs().then(collabs => {
            this.setState({
                collabs: collabs.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { collabs, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
                Cell: props => <div style={{ textAlign: "center" }}>{props.value}</div>
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
                Cell: props => <div style={{ textAlign: "center" }}>{props.value}</div>
            },
            {
                Header: 'Age',
                accessor: 'age',
                filterable: true,
                Cell: props => <div style={{ textAlign: "center" }}>{props.value}</div>
            },
            {
                Header: 'Skill',
                accessor: 'skill',
                Cell: props => <div style={{ textAlign: "center" }}>{props.value.join(' / ')}</div>,
            },
            {
                Header: 'Delete',
                accessor: '',
                Cell: function(props) {
                    return (
                        <div style={{ textAlign: "center" }}>
                            <DeleteCollab id={props.original._id} />
                        </div>
                    )
                },
            },
            {
                Header: 'Update',
                accessor: '',
                Cell: function(props) {
                    return (
                        <div style={{ textAlign: "center" }}>
                            <UpdateCollab id={props.original._id} />
                        </div>
                    )
                },
            },
        ]

        let showTable = true
        if (!collabs.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={collabs}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default CollabsList
