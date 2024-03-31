echo "switching to brand master"
git checkout master

echo "Building app ..."
npm run build

echo "Deploying files to server..."
scp -r .next root@82.165.239.219:/var/www/security_camera_vendor_client/

echo "Done!"