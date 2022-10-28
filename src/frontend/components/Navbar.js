import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import market from './market.png'

const Navigation = ({ web3Handler, account }) => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className=" w-screen bg-black mb-16 ">
            <Container >
                <Navbar.Brand href="https://blockbuild.africa/wp-content/uploads/2022/08/NFT-Utility.jpeg">
                    <img src="https://blockbuild.africa/wp-content/uploads/2022/08/NFT-Utility.jpeg"  className="rounded-full w-48 h-36 " alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-solid border-sky-500 border-2"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className=" mx-4 md:mx-8" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/create" className="mx-4 md:mx-8 " >Create</Nav.Link>
                        <Nav.Link as={Link} to="/my-listed-items" className="mx-4 md:mx-8" >My Listed Items</Nav.Link>
                        <Nav.Link as={Link} to="/my-purchases" className="mx-4 md:mx-8" >My Purchases</Nav.Link>
                    </Nav>
                    <Nav>
                        {account ? (
                            <Nav.Link
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4">
                                <Button variant="outline-light">
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                </Button>

                            </Nav.Link>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-secondary">Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation;