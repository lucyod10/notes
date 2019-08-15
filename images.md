# Hosting images

```
gem 'cloudinary'
```
```
bundle
```

create an account with cloidinary.com
download YML from the site.
Save it in your config folder.

Create a new file in configs folder named `secrets.yml`

```
 atom ~/.bash_profile
```

paste in the following form:
```
# In .bash_profile
 export CLOUDINARY_CLOUD_NAME=dzaktnfkn
 export CLOUDINARY_API_KEY='212159145915795'
 export CLOUDINARY_API_SECRET=3DZt_QV7N34z6Kpul1G8RdTlybk

```

In Heroku, create the key value pairs for the three above rows. In your app go to

In your secrets file, paste in
```
development:
    cloudinary_cloud_name: <%= ENV["CLOUDINARY_CLOUD_NAME"] %>
    cloudinary_api_key: <%= ENV["CLOUDINARY_API_KEY"] %>
    cloudinary_api_secret: <%= ENV["CLOUDINARY_API_SECRET"] %>
test:
    cloudinary_cloud_name: <%= ENV["CLOUDINARY_CLOUD_NAME"] %>
    cloudinary_api_key: <%= ENV["CLOUDINARY_API_KEY"] %>
    cloudinary_api_secret: <%= ENV["CLOUDINARY_API_SECRET"] %>
production:
    cloudinary_cloud_name: <%= ENV["CLOUDINARY_CLOUD_NAME"] %>
    cloudinary_api_key: <%= ENV["CLOUDINARY_API_KEY"] %>
    cloudinary_api_secret: <%= ENV["CLOUDINARY_API_SECRET"] %>

```
and in the cloudinary file, paste in
```
---
development:
  cloud_name: Rails.application.secrets.cloudinary_cloud_name
  api_key: Rails.application.secrets.cloudinary_api_key
  api_secret: Rails.application.secrets.cloudinary_api_secret
  enhance_image_tag: true
  static_image_support: false
production:
  cloud_name: Rails.application.secrets.cloudinary_cloud_name
  api_key: Rails.application.secrets.cloudinary_api_key
  api_secret: Rails.application.secrets.cloudinary_api_secret
  enhance_image_tag: true
  static_image_support: true
test:
  cloud_name: Rails.application.secrets.cloudinary_cloud_name
  api_key: Rails.application.secrets.cloudinary_api_key
  api_secret: Rails.application.secrets.cloudinary_api_secret
  enhance_image_tag: true
  static_image_support: false

```


## To add it to the routes

Add in controller, the if else to handle the file
```

```

Then in the view, when you show instead of `image_tag` use `cl_image_tag`

Then in the form, instead of `text_field` use `cl_image_upload`

in the form tag(line 1) add in the line

```
, :html => {:multipart => true}
```

e.g. so it looks like:
```
<%= form_for @species, :html => {:multipart => true} do |f| %>
```
