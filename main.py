import os
import json

# Đường dẫn đến thư mục wedding
folder_path = 'wedding'

# Kiểm tra xem folder tồn tại hay không
if not os.path.exists(folder_path):
    print(f"Thư mục '{folder_path}' không tồn tại.")
else:
    # Lấy danh sách tên tệp trong thư mục
    file_names = os.listdir(folder_path)

    # Tạo danh sách chứa thông tin về các tệp
    file_list = []

    # Lặp qua danh sách tên tệp và tạo định dạng yêu cầu
    for file_name in file_names:
        if file_name.endswith('.jpg'):
            file_info = {'fileName': file_name}
            file_list.append(file_info)

    # Tạo tệp JSON mới và lưu danh sách vào đó
    json_file_path = 'file_list.json'
    with open(json_file_path, 'w') as json_file:
        json.dump(file_list, json_file, indent=4)

    print(f"Đã tạo tệp JSON '{json_file_path}' thành công.")
