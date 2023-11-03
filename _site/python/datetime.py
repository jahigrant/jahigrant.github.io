<py-script>
import datetime
fmt = "%Z %A %d %B %Y %H:%M:%S"
def date_time_script():
    today = datetime.datetime.now()
    print(today.strftime(fmt))
</py-script>