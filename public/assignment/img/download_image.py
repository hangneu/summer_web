import urllib.request
webpage=input('please input the website \n')
name=input('please input the img name~ \n')
name=name+'.jpg'
urllib.request.urlretrieve(webpage,name)
print("success!")