def format_duration(minutes):
    # Example utility function
    if minutes < 60:
        return f"{minutes} mins"
    else:
        hours = minutes // 60
        mins = minutes % 60
        return f"{hours} hours {mins} mins"