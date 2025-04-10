import pandas as pd
import numpy as np
import json

# Generate random dataset for 12 months
months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]
data = {
    "Month": months,
    "Line 1": np.random.randint(5, 20, size=12).tolist(),
    "Line 2": np.random.randint(10, 30, size=12).tolist(),
    "Line 3": np.random.randint(20, 40, size=12).tolist(),
    "Line 4": np.random.randint(30, 50, size=12).tolist(),
    "Line 5": np.random.randint(40, 60, size=12).tolist(),
}

df = pd.DataFrame(data)

# Convert to JSON and save
json_data = df.to_json(orient="records", indent=4)
with open("data.json", "w") as f:
    f.write(json_data)

print("Data saved to data.json")
