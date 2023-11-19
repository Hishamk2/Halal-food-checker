import docx
import json

def docx_to_json(docx_path, json_path):
    # Open the Word document
    doc = docx.Document(docx_path)

    # Initialize an empty list to store table data
    table_data = []

    # Iterate through tables in the document
    for table in doc.tables:
        for row in table.rows:
            # Extract data from each cell in the row
            columns = [cell.text.strip() for cell in row.cells]

            # Check if the row has the expected number of columns
            if len(columns) == 4:
                # Create a dictionary for each row
                row_data = {
                    "Number": columns[0],
                    "Name": columns[1],
                    "Description": columns[2],
                    "HalalStatus": columns[3]
                }

                # Append the row data to the list
                table_data.append(row_data)
        
        
        json_path = r'C:\Users\hamza\Downloads\PLZWORKth.json'

        # Write the table data to a JSON file
        with open(json_path, 'w') as json_file:
            json.dump(table_data, json_file, indent=2)

# Example usage
docx_to_json(r'C:\Users\hamza\Downloads\ecodesdocx.docx', 'output.json')







        

