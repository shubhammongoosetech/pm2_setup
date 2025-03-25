# Deploying Node.js Applications Using PM2

## Introduction
PM2 is a production-grade process manager for Node.js applications that ensures your application runs continuously, restarts automatically on failures, and provides advanced process management features.

### **Key Features of PM2**
- Keeps applications **alive forever**
- Automatic **restart on crashes**
- **Log management**
- **Process monitoring**

---
## **1. Setting Up Your Node.js Application**

### **Step 1: Initialize Your Project**
```sh
mkdir pm2-deployment
cd pm2-deployment
npm init -y
```

### **Step 2: Install Express (Optional)**
```sh
npm install express
```

### **Step 3: Create Your Application**
Create a file named `app.js`:

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

---
## **2. Installing PM2**
Install PM2 globally:
```sh
npm install -g pm2
```

---
## **3. Starting Your Application with PM2**
Start your app with PM2:
```sh
pm2 start app.js
```
Check application status:
```sh
pm2 list
```

---
## **4. Managing Application Processes with PM2**
### **Basic Process Management**
- Stop a process:
  ```sh
  pm2 stop app
  ```
- Restart a process:
  ```sh
  pm2 restart app
  ```
- Delete a process:
  ```sh
  pm2 delete app
  ```
- View process details:
  ```sh
  pm2 describe app
  ```

---
## **5. Auto-Restart on File Changes**
PM2 can restart your application automatically when files change:
```sh
pm2 start app.js --watch
```
Or use a configuration file (`pm2.config.js`):
```js
module.exports = {
  apps: [
    {
      name: 'app',
      script: './app.js',
      watch: true,
      ignore_watch: ['node_modules', 'logs']
    }
  ]
};
```
Start using the config file:
```sh
pm2 start pm2.config.js
```

---
## **6. Log Management**
View real-time logs:
```sh
pm2 logs
```
Clear logs:
```sh
pm2 flush
```
Set custom log paths:
```js
module.exports = {
  apps: [
    {
      name: 'app',
      script: './app.js',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    }
  ]
};
```

---
## **7. Monitoring Your Application**
Start real-time monitoring:
```sh
pm2 monit
```
For advanced monitoring, link with **Keymetrics**:
```sh
pm2 link <public-key> <secret-key>
```

---
## **8. Configuring PM2 for Production**
### **Cluster Mode (Multi-Core Utilization)**
Run your application in cluster mode for better performance:
```sh
pm2 start app.js -i max
```

### **Using Environment Variables**
Define environment-specific variables in `pm2.config.js`:
```js
module.exports = {
  apps: [
    {
      name: 'app',
      script: './app.js',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 80
      }
    }
  ]
};
```
Run in production mode:
```sh
pm2 start pm2.config.js --env production
```

---
## **9. Setting Up PM2 Startup Scripts**
To ensure PM2 restarts on system reboot:
```sh
pm2 startup
```
Follow the on-screen instructions to enable startup scripts.

### **Saving and Restoring Processes**
Save the current processes:
```sh
pm2 save
```
Restore the processes after a reboot:
```sh
pm2 resurrect
```

---
## **10. Conclusion**
PM2 simplifies the deployment and management of Node.js applications. By using PM2, you ensure **high availability, auto-restart, process monitoring, and logging** for your applications.

With these steps, your Node.js application is now production-ready! 🚀

