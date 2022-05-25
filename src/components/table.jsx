import { memo } from "react";
import { Table as BTable } from "react-bootstrap";

const Table = ({ files }) => {
	const rows = [];
	/** Format data to map on render */
	files.forEach((file) => {
		file.lines.forEach((line) => {
			rows.push({
				file: file.file,
				text: line.text,
				number: line.number,
				hex: line.hex,
			});
		});
	});

	return (
		<BTable striped bordered hover size="sm">
			<thead>
				<tr>
					<th className="text-left">File Name</th>
					<th className="text-left">Text</th>
					<th className="text-left">Number</th>
					<th className="text-left">Hex</th>
				</tr>
			</thead>
			<tbody>
				{rows.map((row, index) => (
					<tr key={index}>
						<td className="text-left">{row.file}</td>
						<td className="text-left">{row.text}</td>
						<td className="text-left">{row.number}</td>
						<td className="text-left">{row.hex}</td>
					</tr>
				))}
			</tbody>
		</BTable>
	);
};

Table.defaultProps = {
	files: [],
};

export default memo(Table);
