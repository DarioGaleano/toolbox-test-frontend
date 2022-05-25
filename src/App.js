import { useEffect, useState } from "react";
import "./App.css";
import { Container, Button, Row, Col, Spinner } from "react-bootstrap";
import { getList, getFilesList } from "./services";
import { Table, Header } from "./components";

function App() {
	const [fileName, setFileName] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [files, setFiles] = useState([]);
	const [filesList, setFilesList] = useState([]);

	/** Get all the files with data and filter by file name */
	useEffect(() => {
		async function init() {
			try {
				setIsLoading(true);
				const { status, response } = await getList({ fileName });
				if (status === 200) {
					setFiles(response);
				}
				setIsLoading(false);
			} catch (e) {
				setIsLoading(false);
				console.log(e);
			}
		}
		init();
	}, [fileName]);

	/** Get list of all files */

	useEffect(() => {
		async function init() {
			try {
				setIsLoading(true);
				const { status, response } = await getFilesList();
				if (status === 200) {
					setFilesList(response.files);
				}
				setIsLoading(false);
			} catch (e) {
				setIsLoading(false);
				console.log(e);
			}
		}
		init();
	}, []);

	return (
		<div className="App">
			<Header />
			<Container>
				<Row className="mb-2">
					{filesList.map((name, index) => (
						<Col key={index} sm={3} xs={6} className="mb-3">
							<Button onClick={() => setFileName(name)} variant="primary">
								{name.toUpperCase()}
							</Button>
						</Col>
					))}
					<Col sm={3} xs={6} className="mb-3">
						<Button onClick={() => setFileName("")} variant="primary">
							TODOS
						</Button>
					</Col>
				</Row>
			</Container>
			<Container className="overflow-auto">{isLoading ? <Spinner animation="border" role="status" /> : <Table files={files} />}</Container>
		</div>
	);
}

export default App;
