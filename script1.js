<!DOCTYPE html>
<html>
<head>
    <title>Link Scanner</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
    <h1>Link Scanner</h1>
    <form id="link-form">
        <label for="link">Link:</label>
        <input type="text" id="link" name="link">
        <button type="submit">Scan</button>
    </form>
    <div id="result"></div>
    <script>
        $(document).ready(function() {
            $('#link-form').submit(function(event) {
                event.preventDefault();
                $.ajax({
                    url: '/scan-link',
                    type: 'POST',
                    data: $(this).serialize(),
                    success: function(response) {
                        $('#result').html(response.message);
                        if (response.isInfected) {
                            $('#result').css('color', 'red');
                        } else {
                            $('#result').css('color', 'green');
                        }
                    },
                    error: function(xhr) {
                        $('#result').html('An error occurred while scanning the link.');
                        $('#result').css('color', 'red');
                    }
                });
            });
        });
    </script>
</body>
</html>
