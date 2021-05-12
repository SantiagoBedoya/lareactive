import React from 'react'
import { AppLayout } from '../../layouts/app-layout'

export const HomePage = () => {
    return (
        <AppLayout>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <div className="card card-body">
                            <div className="card-header">
                                HomePage
                            </div>
                            <div className="card-body">
                                <p>
                                Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
