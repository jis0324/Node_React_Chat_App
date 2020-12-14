import React from 'react'

export default function UserLayout() {
    return (
        <div className="userWrap">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    ONLINE USERS
                </div>
                <div className="panel-body">
                    <ul className="media-list">
                        <li className="media">
                            <div className="media-body">
                                <div id="users">
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
