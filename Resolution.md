## APITesting:
I've done 3 types of tests:

- CRUD
- Error conditions
- E2E data-driven

### CRUD:

- **POST:** A POST request is sent, and the error code is verified. This test also checks that random fields included in the body are present in the response.
- **GET:** A POST request is executed to create new data. Then, the test conducts two validations: one with all books for a generic GET request and searches inside the response to ensure that the new book is present. The second GET request involves appending the book_id to the URL to verify that only the data for the new book is retrieved.
- **Update:** Data creation is initiated with a POST request, followed by modification using a PUT request. Both the status code and the response content are validated to ensure that the update contains the new values.
- **Delete:** Data creation is initiated with a POST request, followed by a DELETE request. The status code is verified to ensure it is 204, indicating success, and confirmation is made that the response is empty.

### Error Conditions:

- **POST:** Error when sending a POST without a mandatory field.

### E2E:

An end-to-end test that creates a book, retrieves that book, edits it, and deletes it, managing this test using the data-driven-test technique to repeat it iteratively with different data.

### BUGS found in the API:

- **BUG-1:** A booking creation POST request with a missing field, gives 500 error, when a 400 could be more accurate handling

### Test result report:

- **Test results with allure reporter image:** [allureReportImage.png](evidences%2FallureReportImage.png)
- **Test Fail in allure reporter image:** [creatBookingError.png](evidences%2FcreatBookingError.png)
