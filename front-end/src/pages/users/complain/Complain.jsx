import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { NavBarsLayout } from '../../../components/NavBarLayout/NavBarsLayout'

function Complain() {
    const title = 'Complain';
    document.title = 'DumbMerch | ' + title

    const img = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'

    const dataContact = [
        {
            id: 1,
            name: 'Admin',
            chat: 'Yes, Is there anything I can help',
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
        },
        {
            id: 2,
            name: 'Admin 2',
            chat: 'Hello World',
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
        }
    ]

    return (
        <>
            <NavBarsLayout title={title} />
            <Container fluid style={{ height: '89.5vh' }}>
                <Row>
                    <Col md={3} style={{ height: '89.5vh' }} className="px-3 border-end border-dark overflow-auto">
                        {dataContact.map((item, index) => (
                            <div
                                key={index}
                                className='contact mt-3 px-2 contact-active'
                            >
                                <img src={item.img} className="rounded-circle me-2 img-contact" alt={item.name} />
                                <div className="pt-2">
                                    <ul className="ps-0 text-contact">
                                        <li>{item.name}</li>
                                        <li className="text-contact-chat mt-1">{item.chat}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </Col>
                    <Col md={9} style={{ maxHeight: '89.5vh' }} className="px-0">
                        <div style={{ height: '80.5vh' }} className="overflow-auto px-3 py-2">
                            <div className="d-flex justify-content-start py-1">
                                <img src={img} className="rounded-circle me-2 img-chat" alt='test' />
                                <div className="chat-other">
                                    Yes, Is there anyting I can help ?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa nemo earum. Labore at tempora cupiditate quisquam dicta explicabo molestias maxime quaerat, fugiat velit sed possimus fuga! Corrupti sunt dolorem tempora laboriosam. Hic, aut delectus eaque quibusdam nulla molestiae vel pariatur molestias voluptas facilis soluta non, nostrum saepe explicabo facere.
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '5vh' }} className="px-3">
                            <input placeholder="Send Message" className="input-message px-2" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Complain