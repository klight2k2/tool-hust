from PyPDF2 import PdfReader
import codecs
import re
import json

reader = PdfReader("testform.pdf")
number_of_pages = len(reader.pages)
text = ''
# for id in range(number_of_pages):
# text += reader.pages[id].extract_text()

print(reader.pages[1].extract_text().split(""))
# listQuestion = re.split("[0-9]{1,3}\.", text)
# listQ = []
# for ques in listQuestion:
#     infoQues = ques.strip().split("Gợi ý")[0].split("a.")
#     if (len(infoQues) > 1):
#         ans = re.split("[a-z]\.", infoQues[1].replace("\n", ""))
#         test = {
#             "question": infoQues[0].replace("\n", ""),
#             "ans": ans
#         }
#         listQ.append(test)
# y = json.dumps(listQ, ensure_ascii=False)
# f = codecs.open("demofile2.json", "w", "utf-8")
# f.write(y)
# f.close()
